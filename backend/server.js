var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000,
    app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Mickaël
//mongoose.connect('mongodb+srv://username:passwordpassword@cluster0.us7rj.mongodb.net/test?retryWrites=true&w=majority');
//Jules
mongoose.connect('mongodb+srv://username:passwordpassword@cluster0.hzckj.mongodb.net/test?retryWrites=true&w=majority');

var CovidSchema = mongoose.Schema({
    nom: String,
    prenom: String,
    etat: String
});

var Covid = mongoose.model('Covid', CovidSchema);

var router = express.Router();
router.route('/')
    .get(function(req, res){
    Covid.find(function(err, covid19){

        if(err){
            res.send(err);
        }
        res.send(covid19);
    });
})

    .post(function(req, res){
        var eleve = new Covid();
        eleve.nom = req.body.nom;
        eleve.prenom = req.body.prenom;
        eleve.etat = req.body.etat;
        eleve.save(function(err){

            if(err){
                res.send(err);
            }
            res.send({message : 'student created'});

        });
    })

router.route('/:eleve_id')
    .get(function(req, res){

        Covid.findOne({_id: req.params.eleve_id}, function(err, eleve){
        if(err){
            res.send(err);
        }
        res.send(eleve);
        });
    })

    .put(function(req, res){
        Covid.findOne({_id: req.params.eleve_id}, function(err, eleve){
            eleve.nom = req.body.nom;
            eleve.prenom = req.body.prenom;
            eleve.etat = req.body.etat;
            eleve.save(function(err){
                if(err){
                    res.send(err);
                }
                res.send({message: 'Student updated'});
            });
        });
    })

    .delete(function(req, res){
        Covid.remove({_id: req.params.eleve_id}, function(err){
            if(err){
                res.send(err);
            }
        res.send({message: 'Student deleted'});
        });
    });

app.use('/api', router);

app.listen(port, function(){
    console.log('Listening on port ' + port);
})
