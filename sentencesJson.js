//const { db } = require("./models/sentenceModel")

db.sentences.insert([

	{
    sentence: "The blue birds in the trees were chirping",
    subject: {
        value: "birds",
        modifiers: [
            {
                type: "determiner",
                value: "The"
            },

            {
                type: "adjective",
                value: "blue"
            },
            {
                type: "prepositional",
                value: "in",
                modifiers: [
                    {
                        type: "object",
                        value: "trees",
                        modifiers: [
                            {
                                type: "determiner",
                                value: "the",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    verb: {
        value: "were cherping"
    
},

sentence: "The rude boys at the table were drinking",
subject: {
    value: "boys",
    modifiers: [
        {
            type: "determiner",
            value: "The"
        },

        {
            type: "adjective",
            value: "rude"
        },
        {
            type: "prepositional",
            value: "at",
            modifiers: [
                {
                    type: "object",
                    value: "table",
                   modifiers: [
                        {
                            type: "determiner",
                            value: "the",
                        }
                    ]
                }
            ]
        }
    ]
},
verb: {
    value: "were drinking"
},
}

])


  
