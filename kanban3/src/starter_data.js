import { v4 as uuidv4 } from 'uuid'

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

export default starter_data

