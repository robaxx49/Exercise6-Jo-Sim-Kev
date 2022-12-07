import express, { application } from 'express';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

const app = express();

// donnees a ajouter dans la DB
// const repertoire =
//     [
//         { "titre": "My life", "artiste": "DJ NoName", "categorie": "Électronica" },
//         { "titre": "Growing Up", "artiste": "A.L.E.X", "categorie": "LoFi" },
//         { "titre": "Cities Of The Future", "artiste": "Infected Mushroom", "categorie": "Électronica" },
//         { "titre": "Gamma Goblins", "artiste": "Infected Mushroom", "categorie": "Électronica" },
//         { "titre": "Hard days", "artiste": "Loupol", "categorie": "Rock" },
//         { "titre": "Money", "artiste": "Pink Floyd", "categorie": "Rock" },
//         { "titre": "Betrayal", "artiste": "Céline Dion", "categorie": "Pop" },
//         { "titre": "Goes On", "artiste": "Céline Dion", "categorie": "Soft" },
//         { "titre": "Sad World", "artiste": "Céline Dion", "categorie": "Variété française" },
//         { "titre": "Red flowers", "artiste": "Hipster2.0", "categorie": "Emo" },
//         { "titre": "Loser", "artiste": "Hipster2.0", "categorie": "Emo" },
//         { "titre": "Sunny", "artiste": "The Good Band", "categorie": "Pop" },
//         { "titre": "My Girl", "artiste": "Motown", "categorie": "Soul" },
//         { "titre": "Strawberry Letter 23", "artiste": "The Brothers Johnson", "categorie": "Soul" },
//         { "titre": "Stomp!", "artiste": "The Brothers Johnson", "categorie": "Soul" }
//     ]


app.use(express.json());

const utiliserDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017')
        const db = client.db('repertoire-musique');

        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).send({ message: 'Erreur de connexion à la base de données', error });
    }
}

app.listen(8000, () => {
    console.log('Server started on port 8000');
});

// ******************** ajout de toutes les données dans la base de données ********************
// app.post('/api/repertoire', async (req, res) => {
//     utiliserDB(async (db) => {
//         await db.collection('repertoire').insertMany(repertoire);
//         res.status(200).send();
//     }, res);
// });

//return all data
app.get('/api/pieces', async (req, res) => {

    utiliserDB(async (db) => {
        const repertoire = await db.collection('repertoire').find({}).toArray();
        if (repertoire.length > 0) {
            res.status(200).send(repertoire);
        } else {
            res.status(404).send("Aucune pièce n'a été trouvée");
        }
    }, res);
});

//return one piece
app.get('/api/pieces/:id', async (req, res) => {
    const id = req.params.id;

    utiliserDB(async (db) => {
        const piece = await db.collection('repertoire').findOne({ _id: ObjectId(id) })
        if (piece !== null) {
            res.status(200).send(piece);
            //res.status(200).send(`Utilisateur trouvé: ${repertoire.titre} ${repertoire.artiste} ${repertoire.categorie} ${repertoire._id}`);
        } else {
            res.status(404).send(`id inexistant : ${id}`);
        }
    }, res);
});

//add a piece
app.post('/api/pieces/ajouter', async (req, res) => {
    const piece = req.body;

    if (piece.titre !== null || piece.artiste !== null || piece.categorie !== null) {
        utiliserDB(async (db) => {
            const repertoire = await db.collection('repertoire').insertOne(piece);
            res.status(200).send(`La pièce ${piece.titre} a été ajoutée`);
        }, res);
    } else {
        res.status(404).send(`La pièce ${piece.titre} n'a pas été ajoutée`);
    }
});

//delete a piece
app.delete('/api/pieces/supprimer/:id', async (req, res) => {
    const id = req.params.id;
    
    if (id !== null) {
        utiliserDB(async (db) => {
            const piece = await db.collection('repertoire').findOne({ "_id": ObjectId(id) });
            if (piece !== null) {
                await db.collection('repertoire').deleteOne({ _id: ObjectId(id) });
                res.status(200).send(`La pièce ${piece.titre} a été supprimée`);
            } else {
                res.status(404).send(`La pièce ${piece.titre} n'a pas été supprimée`);
            }
        }, res);
    } else {
        res.status(404).send(`L'id ${id} n'existe pas`);
    }
});

//update a piece
app.put('/api/pieces/modifier/:id', async (req, res) => {
    const id = req.params.id;
    const piece = req.body;    

    if (id !== null && piece.titre !== null || piece.artiste !== null || piece.categorie !== null) {
        utiliserDB(async (db) => {
            const pieceExiste = await db.collection('repertoire').findOne({ _id: ObjectId(id) });
            if (pieceExiste !== null) {
                await db.collection('repertoire').updateOne({ _id: ObjectId(id) }, { $set: piece });
                res.status(200).send(`La pièce ${piece.titre} a été mise à jour`);
            } else {
                res.status(404).send(`La pièce ${piece.titre} n'a pas été mise à jour, données manquantes`);
            }
        }, res);
    } else {
        res.status(404).send(`La pièce n'a pas été mise à jour, id : ${id} ou piece inexistant`);
    }
});
