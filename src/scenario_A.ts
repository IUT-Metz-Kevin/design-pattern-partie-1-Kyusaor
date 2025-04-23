//Singleton
enum Difficulty {
    EASY = "Facile", 
    HARD = "Difficile"
};
enum languages {
    FR = "Français",
    EN = "English"
};

export class Parameters {

    private static _instance: Parameters;

    private static _gameplayParams: {
        difficulty: Difficulty,
        language: languages
    };

    private static _audioParams : {
        music: number,
        effects: number
    };

    private static _graphicParams: {
        screenResolution: [number, number],
        graphicQuality: number
    };

    private constructor () {};

    public static getInstance() {
        if(!this._instance)
            this._instance = new Parameters();

        return this._instance;
    };

    static get gameplayParams(): typeof this._gameplayParams {
        return this._gameplayParams;
    }

    static set gameplayParams({difficulty, language}: Partial<typeof this._gameplayParams>) {
        this._gameplayParams = { difficulty: difficulty || this.gameplayParams.difficulty, language: language || this.gameplayParams.language}
    }

    static get audioParams(): typeof this._audioParams {
        return this._audioParams;
    }

    static set audioParams({music, effects}: Partial<typeof this._audioParams>) {
        this._audioParams = { music: music || this.audioParams.music, effects: effects || this.audioParams.effects}
    }

    static get graphicParams(): typeof this._graphicParams {
        return this._graphicParams;
    }

    static set graphicParams({screenResolution, graphicQuality}: Partial<typeof this._graphicParams>) {
        this._graphicParams = { screenResolution: screenResolution || this.graphicParams.screenResolution, graphicQuality: graphicQuality || this.graphicParams.graphicQuality}
    }
}

Parameters.getInstance();
Parameters.gameplayParams = {difficulty: Difficulty.HARD, language: languages.FR};
Parameters.audioParams = {music: 15, effects: 20};
Parameters.graphicParams = {screenResolution: [1960, 1080], graphicQuality: 1080}

console.log(Parameters);