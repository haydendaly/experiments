const Kafka = require("kafkajs").Kafka

run()

async function run() {
    try {
        const kafka = new Kafka({
            "clientId" : "myapp",
            "brokers" : ["127.0.0.1:9092"]
        });

        const admin = kafka.admin()
        console.log("Connectiving...")
        await admin.connect()
        console.log("Connected!")

        // A-M, N-Z Partitions
        await admin.createTopics({
            "topics": [{
                "topic" : "Users",
                "numPartitions": 2
            }]
        })

        console.log("Created Successfully!")
        await admin.disconnect()
    }

    catch (ex) {
        console.error(`Something bad happened: ${ex}`)
    }
    finally {
        process.exit(0)
    }
}