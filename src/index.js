// ANOTAÇõES
// Arco -> context.arc(x,y,r,sAngle,eAngle,counterclockwise);
// Ellipse -> context.ellipse(x,y,r,sAngle,eAngle,counterclockwise);

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function emoteAngry(){
        var ctx= canvas.getContext("2d");
        //Rosto.
        ctx.beginPath();
        ctx.arc(100,100,100,0,Math.PI*2);
        ctx.moveTo(80,70);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        //Olho Esquerdo
        ctx.beginPath();
        ctx.arc(60,70,20,0,Math.PI*2);
        ctx.moveTo(160,70);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        //Olho Direito.
        ctx.beginPath();
        ctx.arc(140,70,20,0,Math.PI*2);
        ctx.moveTo(180,100);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        //
        ctx.lineTo(50, 130);
        ctx.moveTo(0, 0);
        ctx.stroke();
        ctx.closePath();
}

function emote(emoji){
        var ctx= canvas.getContext("2d");
        //Rosto.
        ctx.beginPath();
        ctx.arc(100,100,100,0,Math.PI*2);
        ctx.moveTo(80,70);
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.closePath();


        //Olho Esquerdo
        ctx.beginPath();
        ctx.arc(60,70,20,0,Math.PI*2);
        ctx.moveTo(160,70);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        //Olho Direito.
        ctx.beginPath();
        ctx.arc(140,70,20,0,Math.PI*2);
        ctx.moveTo(180,100);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        //
        ctx.beginPath();

        switch(emoji){
            case 'mySmile1':
                ctx.arc(100,100,80,0,Math.PI);
                ctx.moveTo(180,100);
                ctx.stroke();
                sleep(1500).then(() => {
                    emote('mySmile2');
                })
                break;

            case 'mySmile2':

                ctx.arc(100,100,80,0,Math.PI);
                ctx.moveTo(180,100);
                ctx.ellipse(100,100,80,40,0,0,Math.PI);
                ctx.stroke();
                sleep(1500).then(() => {
                    emote('Angry');
                })
                break;

            case 'Angry':
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                emoteAngry();

                sleep(1500).then(() => {
                    emote('');
                })
                break;

            default:
                ctx.ellipse(100,100,80,40,0,0,Math.PI);
                ctx.stroke();
                sleep(1500).then(() => {
                    emote('mySmile1');
                })
                break;
        }
        ctx.closePath();
}


emote('');
