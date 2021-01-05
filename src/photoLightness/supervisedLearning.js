const pixelLightness = {}

const data = require('../data/colorSamples')
const brain = require('brain.js')
let neuralNetwork

pixelLightness.initialize = () =>
{
    // Initialize neural network object
    neuralNetwork = new brain.NeuralNetwork()

    // Train our model based on our data samples
    neuralNetwork.train(data.colorSamples);
}

pixelLightness.predict = (pixelColorHSL) =>
{
    // Predict if pixel is dark or light
    const prediction = brain.likely(pixelColorHSL, neuralNetwork);
    return prediction
}

module.exports = pixelLightness