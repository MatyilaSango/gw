import * as PIXI from "pixi.js"

export default async function AnimatedHourly(iconLink: string, id: number): Promise<boolean> {
    let iconKey: string = iconLink.split("/")[iconLink.split("/").length - 1].replace(".svg", "")

    let spriteImage;
    let sheet;
    
    try {
        sheet = require(`../../Sprite_Sheets/${iconKey}/${iconKey}.json`)
        spriteImage = require(`../../Sprite_Sheets/${iconKey}/${iconKey}.png`)
    } catch (err) {
        return false
    }

    const app = new PIXI.Application<HTMLCanvasElement>({
        backgroundAlpha: 0,
        width: 300,
        height: 300,
    });

    const spritesheet = new PIXI.Spritesheet(
        PIXI.BaseTexture.from(spriteImage.default.src),
        { ...sheet, animations: { "frame_": Object.keys(sheet.frames) } }
    );

    await spritesheet.parse();

    //@ts-ignore
    let anim = new PIXI.AnimatedSprite(spritesheet.animations.frame_);
    anim.animationSpeed = 0.3
    anim.play();

    app.stage.addChild(anim);

    let element = document.getElementById(`Hourly-Wrapper__icon_type__img_${id}`)
    if (!element?.innerHTML.includes("canvas")) element?.appendChild(app.view)

    return true

}
