import React from "react"
import ProducerList from "../components/producerList"
import Layout from "../components/layout"
import { producerData } from '../components/producers.js'


const Producers = () => (
    <Layout>
        <ProducerList producerData={producerData} />
    </Layout>
)

export default Producers
