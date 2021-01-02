        var space = "";
        //plus la valeur de speed est grande plus le texte vas lentement et plus elle est petite plus il vas vite
        var speed = "250";
        var pos = 0;
        var msg = " Okaya V2.0.2 Bienvenue <|> ";
        function Scroll() {
            document.title = msg.substring(pos, msg.length) + space + msg.substring(0, pos);
            pos++;
            if (pos > msg.length) pos = 0;
            window.setTimeout("Scroll()", speed);
        }
        Scroll(); 
