class TikTok {
    constructor()   {
        // alert("Dekat mana kekuatan hang tuah? dekat T HAHAHAHAHAHA");
        this.developer = "Code";
        this.description = "This code is to automate unsave, unrepost, unlike on your tiktok";
        this.version = "v2025.0.0-Dev";
        this.options_available = "0 - Unsave\n1 - Unrepost\n2 - Unlike\n\nHow to use: main(option, task)";
        this.contact_developer = "GitHub / Instagram / TikTok / Discord / LinkedIn: @MNWANX";
        this.website = "https://mnwanx.github.io";
        this.scroll_class = "css-1s9jpf8-ButtonBasicButtonContainer-StyledVideoSwitch e11s2kul11";
        this.unsave_button_id = "icon-element-repost";
        this.like_save_button_class = "css-1ncfmqs-ButtonActionItem";
    }
    scroll_next()  {
        document.getElementsByClassName(this.scroll_class)[0].click();
    }
    unrepost() {
        document.getElementById(this.unsave_button_id).click()
    }
    unsave()   {
        document.getElementsByClassName(this.like_save_button_class)[2].click();
    }
    unlike()    {
        document.getElementsByClassName(this.like_save_button_class)[0].click();
    }
    contact()   {
        window.location.href = this.website; 
    }
    help()  {
        console.clear();
        console.log('%cDeveloped by ' + this.developer, 'color:white;font-size:20px;');
        console.log(this.options_available);
    }
}

tiktok = new  TikTok()
tiktok.help();
function main(option, task) {
    tiktok.help();
   for (i = 0; i < task; i++)  {
    try {
        switch (option) {
            case 0:
                tiktok.unsave();
                break;
            case 1:
                tiktok.unrepost();
                break;
            case 2:
                tiktok.unlike();
                break;
            default:
                alert("Option invalid!");
                break;
        }
        tiktok.scroll_next();
        console.log("Done: " + i + " / " + task)
    }   catch (e)   {

    }
   }
   alert("Done");
}

function help() {
    tiktok.help();
}

function credit()   {
    console.log(tiktok.contact_developer);
}