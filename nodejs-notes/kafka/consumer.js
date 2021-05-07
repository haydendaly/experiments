const Kafka = require("kafkajs").Kafka

run()

async function run() {
    try {
        const kafka = new Kafka({
            "clientId" : "myapp",
            "brokers" : ["127.0.0.1:9092"]
        });

        const consumer = kafka.consumer({"groupId" : "test"})
        console.log("Connectiving...")
        await consumer.connect()
        console.log("Connected!")

        consumer.subscribe({ 
            "topic": "Users", 
            "fromBeginning": true
        })

        await consumer.run({ 
            "eachMessage": async result => {
                console.log(`RVD Msg ${result.message.value} on ${resukt.partition}`)
            }
        })
    }

    catch (ex) {
        console.error(`Something bad happened: ${ex}`)
    }
}