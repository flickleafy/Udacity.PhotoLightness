// Simple example of supervised learning used to recognize if a photo is light or dark

const photoLightness = require('./photoLightness/supervisedLearning')
const imageHelper = require('./helpers/imageHelper')
const directoryHelper = require('./helpers/directoryHelper')

directoryHelper.listing("./res/testData").then(async (files) =>
{
    photoLightness.initialize()
    if (files)
    {
        for (let index = 0; index < files.length; index++)
        {
            const fileObject = files[index];

            // Load local image from our resources
            const image = await directoryHelper.getImage(fileObject.path + fileObject.name)

            // Convert to the format used in our model
            const pixelColorHSL = await imageHelper.imageColorAveragingHSL(image)

            //Predict if it is dark or light based on the averaged pixel
            const prediction = photoLightness.predict(pixelColorHSL)

            console.log("The prediction of the photo ", fileObject.name, " is: ", prediction)
        }
    }
})




