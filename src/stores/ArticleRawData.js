import { observable, action, computed } from "mobx";
import axios from 'axios'


export class ProcessedData {

    @observable rawData = { content: [] }
    @observable difficultyLevelValue
    @observable websiteURL
    @action createWebsiteData = async (url) => {
        let data = await axios.get(`http://localhost:8000/url?url=${this.websiteURL}&lang=he`)
        console.log(data)
        this.rawData = data.data[0] ? data.data[0].translatedArticleContent : data.data.translatedArticleContent
        console.log(this.rawData)

    }

    @action translationSlider = (difficultyLevel) => {
        console.log("im the slider value", difficultyLevel)
        this.difficultyLevelValue = difficultyLevel
    }

    @action changeTranslationLanguage = async (lang) => {
        let data = await axios.get(`http://localhost:8000/url?url=${this.websiteURL}&lang=${lang}`)
        console.log(lang)
        // console.log(data)
        this.rawData = data.data
        console.log(this.rawData)
    }
}

