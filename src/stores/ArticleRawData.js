import { observable, action, computed } from "mobx";
import axios from 'axios'


export class ProcessedData {

    @observable rawData = { content: [] }
    @observable difficultyLevelValue
    @action createWebsiteData = async (url) => {
        let data = await axios.get(`http://localhost:8000/url?url=${url}`)
        console.log(data)
        this.rawData = data.data
        console.log(this.rawData)

    }

    @action translationSlider = (difficultyLevel) => {
        console.log("im the slider value", difficultyLevel)
        this.difficultyLevelValue = difficultyLevel
        // this.difficultyLevelValue = `{color: "red"}`

        // switch (true) {
        //     case difficultyLevel > 50:
        //         color: "red"
        //         break;
        //     case difficultyLevel < 50:
        //         color: "red"
        //         break;
        //     default:
        //         color: "green"
        // }

        // return difficultyLevel
    }
}

