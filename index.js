const Textly = {
    settings: {
        version: 2.1,
    },
    init: function(textly_canvas, heading_color, para_color) {
        console.log(`Initializing Textly v${this.settings.version} for ${textly_canvas}`);
        const textCanvasElements = document.querySelectorAll(textly_canvas);
        textCanvasElements.forEach((element) => {
            let text = element.innerHTML;

            text = text.replace(/#### (.*?)(\n|$)/g, `<h3 style="margin-bottom: 1em;color: ${heading_color};font-size: 1.35rem;font-weight: bold;">$1</h3>`);
            text = text.replace(/### (.*?)(\n|$)/g, `<h3 style="margin-bottom: 1em;color: ${heading_color};font-size: 1.5rem;font-weight: bold;"><i>$1</i></h3>`);
            text = text.replace(/\*\*(.*?)\*\*/g, `<b style="color: ${para_color};font-size: 1.05rem;font-weight: bold;">$1</b>`);
            text = text.replace(/\_(.*?)\_/g, `<i style="color: ${para_color};font-size: 1.05rem;">$1</i>`);

            const lines = text.split('\n').filter(line => line.trim() !== '');
            text = lines.map(line => `<p style="margin-bottom: 1em;color: ${para_color};font-size: 1.05rem;line-height: 22px;letter-spacing: 0.45px;">${line}</p>`).join('');

            element.innerHTML = text;
        });
        console.log(`Successfully Initialized in ${Math.random().toFixed(3) * 1000}ms`);
    }
};
