// Simple example of supervised learning used to recognize if a photo is light or dark

const pixelLightness = require('./photoLightness/supervisedLearning')
const imagePreprocessing = require('./photoLightness/imagePreprocessing')
const directoryHelper = require('./helpers/directoryHelper')

pixelLightness.initialize()

directoryHelper.listing("./res/").then(async (files) =>
{
    if (files)
    {
        for (let index = 0; index < files.length; index++)
        {
            const file = files[index];

            const pixelColorHSL = await imagePreprocessing.colorAveraging(file.path + file.name)

            //Predict if it is dark or light based on the averaged pixel
            const prediction = pixelLightness.predict(pixelColorHSL)
            console.log("The prediction of the photo ", file.name, " is: ", prediction)
        }
    }
})




