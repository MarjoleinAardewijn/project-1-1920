export const tts = {
    speech: function (query) {
        responsiveVoice.setDefaultVoice("Dutch Female");
        responsiveVoice.speak(`Ik heb de volgende boeken over ${query} gevonden`);
    }
};