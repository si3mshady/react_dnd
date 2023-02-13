const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const  cors = require('cors')
const PORT = 888



const starter_data = [
    {

        id: uuidv4(),
        title: '📝 Tasks to do  ',
        tasks: [
            {
                id: uuidv4(),
                title: 'Practice D/S'
            },
            { id: uuidv4(),
                title: 'Practice K8s'
            
            },
            {
                id: uuidv4(),
                title: 'Practice ML'
            }
        ]
    },
    {

        id: uuidv4(),
        title: '🛫 In Progress ',
        tasks: [
            {
                id: uuidv4(),
                title: 'Upgrade EKS'
            },
            {
                id: uuidv4(),
                title: 'Patch nodes'
            },
            {
                id: uuidv4(),
                title: 'Practice coding'
            },

        ]

    },{
        id: uuidv4(),
        title: '💪🏼 Completed ',
        tasks : [
            {
                id: uuidv4(),
                title: "Linkedin post"
            }
        ]
    }
]


app.use(cors())

app.get('/load', (req, res) => {
    console.log('hit load')
    res.json(starter_data)


});


// Start the server and listen on port 3000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
