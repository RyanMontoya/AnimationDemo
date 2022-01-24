class knight { 
    
    constructor(game) { 
        this.game = game; 

    //   Object.assign(this, {game, x, y});   
        this.animator = new Animator(ASSET_MANAGER.getAsset("./knightAttack.png"), 25, 25,120 , 120, 4, 0.1);


    };


    updateBB() { 
    
    };


     update() { 
            const MIN_WALK = 5; 
            


     };

         draw(ctx) {  


            this.animator.drawFrame(this.game.clockTick, ctx, 25,25,1);
       // ctx.drawImage(ASSET_MANAGER.getAsset("./knightAttack.png"),0,0);
        //  this.animation. drawFrame(this.game.clockTick,ctx,0,0,3);


        }; 


}