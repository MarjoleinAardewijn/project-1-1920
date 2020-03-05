export const tts = {
    speech: function (query) {
        responsiveVoice.setDefaultVoice("Dutch Female");
        responsiveVoice.speak(`Dit zijn de boeken over ${query}`);
    }
};