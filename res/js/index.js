class Product
{
    
    constructor()
    {
        //nodb: source date
        this.NFG001 = {code:"NFG001",desc:"Small loop on solid circle-name pendant",dim:"12.9 x 12.9",font:"ariola",fontSize:"8",rotate:"-14deg",dy:"0",accent:"yes",textLength:"8",textFormat:"upper and lowercase",note:""};
        this.NFG002 = {code:"NFG002",desc:"Small loop on dogtag-name pendant",dim:"9.3 x 14.8",font:"ariola",fontSize:"6",rotate:"-14deg",dy:"0",accent:"yes",textLength:"8",textFormat:"upper and lowercase",note:""};
        this.NFG003 = {code:"NFG003",desc:"Small loop on open heart-name pendant",dim:"14.4 x 14.4",font:"ariola",fontSize:"7",rotate:"0",dy:"0",accent:"yes",textLength:"9",textFormat:"upper and lowercase",note:""};
        this.NFG004 = {code:"NFG004",desc:"Small loop on open circle-name pendant",dim:"15 x 15",font:"ariola",fontSize:"8",rotate:"0",dy:"0",accent:"yes",textLength:"12",textFormat:"upper and lowercase",note:""};
        this.NFG005 = {code:"NFG005",desc:"Small loop on solid oval-name pendant",dim:"11.5 x 13.6",font:"ariola",fontSize:"7",rotate:"-14deg",dy:"0",accent:"yes",textLength:"8",textFormat:"upper and lowercase",note:""};
        this.NFG006 = {code:"NFG006",desc:"Small loop on solid heart-name pendant",dim:"14.4 x 12.5",font:"ariola",fontSize:"7",rotate:"-14deg",dy:"0",accent:"yes",textLength:"8",textFormat:"upper and lowercase",note:""};
        this.NFG007 = {code:"NFG007",desc:"Small solid circle-name bracelet",dim:"12.9 x 12.9",font:"ariola",fontSize:"7",rotate:"-20deg",dy:"0",accent:"yes",textLength:"8",textFormat:"upper and lowercase",note:""};
        this.NFG008 = {code:"NFG008",desc:"Small solid oval-name bracelet",dim:"11.5 x 13.6",font:"ariola",fontSize:"7",rotate:"-35deg",dy:"0",accent:"yes",textLength:"8",textFormat:"upper and lowercase",note:""};
        this.NFG009 = {code:"NFG009",desc:"Small solid heart-name bracelet",dim:"14.4 x 12.5",font:"ariola",fontSize:"7",rotate:"-14deg",dy:"0",accent:"yes",textLength:"8",textFormat:"upper and lowercase",note:""};
        this.NFG010 = {code:"NFG010",desc:"Small open circle-name bracelet",dim:"15 x 15",font:"ariola",fontSize:"7",rotate:"0",dy:"0",accent:"yes",textLength:"12",textFormat:"upper and lowercase",note:""};
        
        this.NFG011 = {code:"NFG011",desc:"Small solid circle-cut out pendant",dim:"12.9 x 12.9",font:"starosa",fontSize:"25",rotate:"0",dy:"0",accent:"yes",textLength:"1",textFormat:"uppercase",note:"Letters are cut-out"};
        this.NFG012 = {code:"NFG012",desc:"Small solid dogtag-cut out pendant",dim:"9.3 x 14.8",font:"starosa",fontSize:"25",rotate:"0",dy:"0",accent:"yes",textLength:"1",textFormat:"uppercase",note:"Letters are cut-out"};
        this.NFG013 = {code:"NFG013",desc:"Small solid oval-cut out pendant",dim:"11.5 x 13.6",font:"starosa",fontSize:"25",rotate:"0",dy:"0",accent:"yes",textLength:"1",textFormat:"uppercase",note:"Letters are cut-out"};
        this.NFG014 = {code:"NFG014",desc:"Small solid heart-cut out pendant",dim:"14.4 x 12.5",font:"starosa",fontSize:"25",rotate:"0",dy:"0",accent:"yes",textLength:"1",textFormat:"uppercase",note:"Letters are cut-out"};
        this.NFG015 = {code:"NFG015",desc:"Small solid circle-cut out bracelet",dim:"12.9 x 12.9",font:"starosa",fontSize:"25",rotate:"0",dy:"0",accent:"yes",textLength:"1",textFormat:"uppercase",note:"Letters are cut-out"};
        this.NFG016 = {code:"NFG016",desc:"Small solid oval-cut out bracelet",dim:"11.5 x 13.6",font:"starosa",fontSize:"25",rotate:"0",dy:"0",accent:"yes",textLength:"1",textFormat:"uppercase",note:"Letters are cut-out"};
        this.NFG017 = {code:"NFG017",desc:"Small solid heart-cut out bracelet",dim:"14.4 x 12.5",font:"starosa",fontSize:"25",rotate:"0",dy:"0",accent:"yes",textLength:"1",textFormat:"uppercase",note:"Letters are cut-out"};
        
        this.NFG018 = {code:"NFG018",desc:"Small solid circle fingerprint pendant",dim:"12.9 x 12.9",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Fingerprint required"};
        this.NFG019 = {code:"NFG019",desc:"Small solid dogtag fingerprint pendant",dim:"9.3 x 14.8",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Fingerprint required"};
        this.NFG020 = {code:"NFG020",desc:"Small solid oval fingerprint pendant",dim:"11.5 x 13.6",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Fingerprint required"};
        this.NFG021 = {code:"NFG021",desc:"Small solid heart fingerprint pendant",dim:"14.4 x 12.5",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Fingerprint required"};
        this.NFG022 = {code:"NFG022",desc:"Small solid circle fingerprint bracelet",dim:"12.9 x 12.9",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Fingerprint required"};
        this.NFG023 = {code:"NFG023",desc:"Small solid oval fingerprint bracelet",dim:"11.5 x 13.6",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Fingerprint required"};
        this.NFG024 = {code:"NFG024",desc:"Small solid heart fingerprint bracelet",dim:"14.4 x 12.5",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Fingerprint required"};
        
        this.NFG025 = {code:"NFG025",desc:"Small solid circle sketch pendant",dim:"12.9 x 12.9",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Sketch required"};
        this.NFG026 = {code:"NFG026",desc:"Small solid dogtag sketch pendant",dim:"9.3 x 14.8",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Sketch required"};
        this.NFG027 = {code:"NFG027",desc:"Small solid oval sketch pendant",dim:"11.5 x 13.6",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Sketch required"};
        this.NFG028 = {code:"NFG028",desc:"Small solid heart sketch pendant",dim:"14.4 x 12.5",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Sketch required"};
        this.NFG029 = {code:"NFG029",desc:"Small solid circle sketch bracelet",dim:"12.9 x 12.9",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Sketch required"};
        this.NFG030 = {code:"NFG030",desc:"Small solid oval sketch bracelet",dim:"11.5 x 13.6",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Sketch required"};
        this.NFG031 = {code:"NFG031",desc:"Small solid heart sketch bracelet",dim:"14.4 x 12.5",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"yes",textLength:"0",textFormat:"none",note:"Sketch required"};
        
        this.NFG032 = {code:"NFG032",desc:"Small solid circle english monogram pendant",dim:"12.9 x 12.9",font:"english",fontSize:"23; 18; 12 18 12",rotate:"0",dy:"0 2.5 -2.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG033 = {code:"NFG033",desc:"Small solid dogtag english monogram pendant",dim:"9.3 x 14.8",font:"english",fontSize:"23; 15; 9 13.5 9",rotate:"0",dy:"0 1.5 -1.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG034 = {code:"NFG034",desc:"Small solid oval english monogram pendant",dim:"11.5 x 13.6",font:"english",fontSize:"23; 18; 11 16 11",rotate:"0",dy:"0 2 -2",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG035 = {code:"NFG035",desc:"Small solid heart english monogram pendant",dim:"14.4 x 12.5",font:"english",fontSize:"22; 17; 11 18 11",rotate:"0",dy:" 0 2.5 -2.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG036 = {code:"NFG036",desc:"Small solid circle english monogram bracelet",dim:"12.9 x 12.9",font:"english",fontSize:"23; 17; 9 16 9",rotate:"0",dy:"0 2.5 -2.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG037 = {code:"NFG037",desc:"Small solid oval english monogram bracelet",dim:"11.5 x 13.6",font:"english",fontSize:"23; 15; 8 13 8",rotate:"0",dy:"0 2 -2",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG038 = {code:"NFG038",desc:"Small solid heart english monogram bracelet",dim:"14.4 x 12.5",font:"english",fontSize:"22; 17; 10 18.5 10",rotate:"0",dy:"0 2.5 -2.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        
        this.NFG039 = {code:"NFG039",desc:"Small solid circle imprint monogram pendant",dim:"12.9 x 12.9",font:"imprint",fontSize:"23; 18; 12 19 12",rotate:"0",dy:"0 2.5 -2.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG040 = {code:"NFG040",desc:"Small solid dogtag imprint monogram pendant",dim:"9.3 x 14.8",font:"imprint",fontSize:"23; 15; 9 13.5 9",rotate:"0",dy:"0 1.5 -1.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG041 = {code:"NFG041",desc:"Small solid oval imprint monogram pendant",dim:"11.5 x 13.6",font:"imprint",fontSize:"23; 18; 12 17 12",rotate:"0",dy:" 0 2 -2",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG042 = {code:"NFG042",desc:"Small solid heart imprint monogram pendant",dim:"14.4 x 12.5",font:"imprint",fontSize:"22; 17;11 18 11",rotate:"0",dy:"0 2.5 -2.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG043 = {code:"NFG043",desc:"Small solid circle imprint monogram bracelet",dim:"12.9 x 12.9",font:"imprint",fontSize:"23; 18; 9 15 9",rotate:"0",dy:"0 2 -2",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG044 = {code:"NFG044",desc:"Small solid oval imprint monogram bracelet",dim:"11.5 x 13.6",font:"imprint",fontSize:"23; 15; 8 13 8",rotate:"0",dy:"0 1.5 -1.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        this.NFG045 = {code:"NFG045",desc:"Small solid heart imprint monogram bracelet",dim:"14.4 x 12.5",font:"imprint",fontSize:"22; 17; 10 17 10",rotate:"0",dy:"0 2.5 -2.5",accent:"yes",textLength:"1-3",textFormat:"uppercase",note:""};
        
        this.NFG046 = {code:"NFG046",desc:"Small single initial pendant: 4.5mm loop",dim:"8.7 x 11.1",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"no",textLength:"1",textFormat:"uppercase",note:"shapes: BA; FA; HA"};
        this.NFG047 = {code:"NFG047",desc:"Small single initial bracelet: 4.5mm loop",dim:"8.7 x 11.1",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"no",textLength:"1",textFormat:"uppercase",note:"shapes: BA; FA; HA"};
        this.NFG048 = {code:"NFG048",desc:"Small double initial bracelet: 4.5mm loop, 1.5cm spacing",dim:"8.7 x 11.1",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"no",textLength:"2",textFormat:"uppercase",note:"shapes: BA; FA; HA"};
        this.NFG049 = {code:"NFG049",desc:"Small tripple initial bracelet: 4.5mm loop, 1.5cm spacing",dim:"8.7 x 11.1",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"no",textLength:"3",textFormat:"uppercase",note:"shapes: BA; FA; HA"};
        
        this.NFG050 = {code:"NFG050",desc:"Large dogtag fingerprint and name pendant",dim:"22 x 35",font:"modern",fontSize:"10",rotate:"0",dy:"0",accent:"yes",textLength:"13",textFormat:"upper and lowercase",note:""};
        this.NFG051 = {code:"NFG051",desc:"Large dropbar fingerprint and name pendant",dim:"8.1 x 35",font:"modern",fontSize:"12",rotate:"0",dy:"0",accent:"yes",textLength:"2",textFormat:"upper and lowercase",note:""};
        
        this.NFG052 = {code:"NFG052",desc:"Large dogtag sketch and name pendant",dim:"22 x 35",font:"modern",fontSize:"10",rotate:"0",dy:"0",accent:"yes",textLength:"13",textFormat:"upper and lowercase",note:""};
        this.NFG053 = {code:"NFG053",desc:"Large dropbar sketch and name pendant",dim:"8.1 x 35",font:"modern",fontSize:"12",rotate:"0",dy:"0",accent:"yes",textLength:"2",textFormat:"upper and lowercase",note:""};
        
        this.NFG054 = {code:"NFG054",desc:"Large dogtag name pendant",dim:"22 x 35",font:"modern",fontSize:"10",rotate:"0",dy:"0",accent:"yes",textLength:"13",textFormat:"upper and lowercase",note:""};
        this.NFG055 = {code:"NFG055",desc:"Large dropbar name pendant",dim:"8.1 x 35",font:"modern",fontSize:"12",rotate:"0",dy:"0",accent:"yes",textLength:"13",textFormat:"upper and lowercase",note:""};
       
        this.NFG056 = {code:"NFG056",desc:"Small quad initial bracelet: 4.5mm loop, 1.5cm spacing",dim:"8.7 x 11.1",font:"none",fontSize:"0",rotate:"0",dy:"0",accent:"no",textLength:"4",textFormat:"uppercase",note:"shapes: BA; FA; HA"};
        
        //product map
        this.prods = 
        [
            {codec:this.NFG001.code,ob:this.NFG001},{codec:this.NFG002.code,ob:this.NFG002},{codec:this.NFG003.code,ob:this.NFG003},
            {codec:this.NFG004.code,ob:this.NFG004},{codec:this.NFG005.code,ob:this.NFG005},{codec:this.NFG006.code,ob:this.NFG006},
            {codec:this.NFG007.code,ob:this.NFG007},{codec:this.NFG008.code,ob:this.NFG008},{codec:this.NFG009.code,ob:this.NFG009},
            {codec:this.NFG010.code,ob:this.NFG010},{codec:this.NFG011.code,ob:this.NFG011},{codec:this.NFG012.code,ob:this.NFG012},
            {codec:this.NFG013.code,ob:this.NFG013},{codec:this.NFG014.code,ob:this.NFG014},{codec:this.NFG015.code,ob:this.NFG015},
            {codec:this.NFG016.code,ob:this.NFG016},{codec:this.NFG017.code,ob:this.NFG017},{codec:this.NFG018.code,ob:this.NFG018},
            {codec:this.NFG019.code,ob:this.NFG019},{codec:this.NFG020.code,ob:this.NFG020},{codec:this.NFG021.code,ob:this.NFG021},
            {codec:this.NFG022.code,ob:this.NFG022},{codec:this.NFG023.code,ob:this.NFG023},{codec:this.NFG024.code,ob:this.NFG024},
            {codec:this.NFG025.code,ob:this.NFG025},{codec:this.NFG026.code,ob:this.NFG026},{codec:this.NFG027.code,ob:this.NFG027},
            {codec:this.NFG028.code,ob:this.NFG028},{codec:this.NFG029.code,ob:this.NFG029},{codec:this.NFG030.code,ob:this.NFG030},
            {codec:this.NFG031.code,ob:this.NFG031},{codec:this.NFG032.code,ob:this.NFG032},{codec:this.NFG033.code,ob:this.NFG033},
            {codec:this.NFG034.code,ob:this.NFG034},{codec:this.NFG035.code,ob:this.NFG035},{codec:this.NFG036.code,ob:this.NFG036},
            {codec:this.NFG037.code,ob:this.NFG037},{codec:this.NFG038.code,ob:this.NFG038},{codec:this.NFG039.code,ob:this.NFG039},
            {codec:this.NFG040.code,ob:this.NFG040},{codec:this.NFG041.code,ob:this.NFG041},{codec:this.NFG042.code,ob:this.NFG042},
            {codec:this.NFG043.code,ob:this.NFG043},{codec:this.NFG044.code,ob:this.NFG044},{codec:this.NFG045.code,ob:this.NFG045},
            {codec:this.NFG046.code,ob:this.NFG046},{codec:this.NFG047.code,ob:this.NFG047},{codec:this.NFG048.code,ob:this.NFG048},
            {codec:this.NFG049.code,ob:this.NFG049},{codec:this.NFG050.code,ob:this.NFG050},{codec:this.NFG051.code,ob:this.NFG051},
            {codec:this.NFG052.code,ob:this.NFG052},{codec:this.NFG053.code,ob:this.NFG053},{codec:this.NFG054.code,ob:this.NFG054},
            {codec:this.NFG055.code,ob:this.NFG055},{codec:this.NFG056.code,ob:this.NFG056}
        ];
   
        
    }

    //sidebar helper function/no jsx
    _productDropDown(target, src_array, btn_title)
    {
        var result = "";
        
        var start = "<div class='dropdown w-100' ><button type='button' class='btn border-0 dropdown-toggle mb-2 text-left w-100' data-toggle='dropdown' >" + btn_title + " </button><div class='dropdown-menu' >";
        var end = "</div></div>";
        
        for(var i = 0; i < src_array.length; i++)
        {
            result += "<a class='dropdown-item' href='javascript: void(0)' onclick='product.productStyle(this.innerHTML)'>".concat(src_array[i].code).concat("</a>");
        }

        $("#".concat(target)).append(start +result+ end);
    }
    //sidebar 
    sideBar()
    {
        try
        {
            var target = "sb";
            //group by category
            this.name_pdt = [this.NFG001,this.NFG002,this.NFG003,this.NFG004,this.NFG005,this.NFG006];
            this.name_br = [this.NFG007,this.NFG008,this.NFG009,this.NFG010];
            this.cutout_pdt = [this.NFG011,this.NFG012,this.NFG013,this.NFG014];
            this.cutout_br = [this.NFG015,this.NFG016,this.NFG017];
            this.print_pdt = [this.NFG018,this.NFG019,this.NFG020,this.NFG021];
            this.print_br = [this.NFG022,this.NFG023,this.NFG024];
            this.sketch_pdt = [this.NFG025,this.NFG026,this.NFG027,this.NFG028];
            this.sketch_br = [this.NFG029,this.NFG030,this.NFG031];
            this.eng_pdt = [this.NFG032,this.NFG033,this.NFG034,this.NFG035];
            this.eng_br = [this.NFG036,this.NFG037,this.NFG038];
            this.imprint_pdt= [this.NFG039,this.NFG040,this.NFG041,this.NFG042];
            this.imprint_br = [this.NFG043,this.NFG044,this.NFG045];
            this.init_pdt = [this.NFG046];
            this.init_br = [this.NFG047,this.NFG048,this.NFG049,this.NFG056];

            this.lrg_print_pdt = [this.NFG050,this.NFG051];
            this.lrg_sketch_pdt = [this.NFG052,this.NFG053];
            this.l_name_pdt = [this.NFG054,this.NFG055];
            //group service
            this._productDropDown(target, this.name_pdt, "Name Pendants");
            this._productDropDown(target, this.name_br, "Name Bracelets");

            this._productDropDown(target, this.cutout_pdt, "CutOut Pendants");
            this._productDropDown(target, this.cutout_br, "CutOut Bracelets");
            
            this._productDropDown(target, this.print_pdt, "Fingerprint Pendants");
            this._productDropDown(target, this.print_br, "Fingerprint Bracelets");
            
            this._productDropDown(target, this.sketch_pdt, "Sketch Pendants");
            this._productDropDown(target, this.sketch_br, "Sketch Bracelets");
            
            this._productDropDown(target, this.eng_pdt, "EngMono Pendants");
            this._productDropDown(target, this.eng_br, "EngMono Bracelets");
            
            this._productDropDown(target, this.imprint_pdt, "ImprintMono Pendants");
            this._productDropDown(target, this.imprint_br, "ImprintMono Bracelets");
            
            this._productDropDown(target, this.init_pdt, "Initial Pendants");
            this._productDropDown(target, this.init_br, "Initial Bracelets");
            
            this._productDropDown(target, this.lrg_print_pdt, "Lrg Print Pendants");
            this._productDropDown(target, this.lrg_sketch_pdt, "Lrg SketchBracelets");
            this._productDropDown(target, this.l_name_pdt, "Lrg Name Pendants");
        }
        catch(e)
        {
            alert(e);
        }
    }
    
    productStyle(item)
    {
        this.canvas = $("#canvas").get(0);
        //required inputs
        var inputs = ["style","size","max-text","format","font"," font size","rotation","dy step","accents","notes"];
        //no jsx
        var pre = "<div class='input-group input-group-sm mb-2'> <div class='input-group-prepend'><span class='input-group-text'>";
        var suf = "</span></div><input id='_code' type='text' class='form-control' value='__'></div>";
        //placeholder
        var tmp = "";
        //map product properties
        for(var i=0;i<this.prods.length;i++)
        {
            if(this.prods[i].codec === item)
            {
                tmp += (pre + inputs[0] + suf).replace("__",this.prods[i].ob.code);
                tmp += (pre + inputs[1] + suf).replace("__",this.prods[i].ob.dim);
                tmp += (pre + inputs[2] + suf).replace("__",this.prods[i].ob.textLength);

                tmp += (pre + inputs[3] + suf).replace("__",this.prods[i].ob.textFormat);
                tmp += (pre + inputs[4] + suf).replace("__",this.prods[i].ob.font);
                tmp += (pre + inputs[5] + suf).replace("__",this.prods[i].ob.fontSize);

                tmp += (pre + inputs[6] + suf).replace("__",this.prods[i].ob.rotate);
                tmp += (pre + inputs[7] + suf).replace("__",this.prods[i].ob.dy);
                tmp += (pre + inputs[8] + suf).replace("__",this.prods[i].ob.accent);
                tmp += (pre + inputs[9] + suf).replace("__",this.prods[i].ob.note);
                $("#_desc").text(this.prods[i].ob.desc);
                
                //paint canvas: no servlet
                $("#".concat("_inputs")).html(tmp); 
                var im = new Image();
                    im.src = "res/images/" + this.prods[i].ob.code + ".png";
                    im.style.width="400px";
                    im.style.height="400px";
                
                var ctx = this.canvas.getContext('2d');
                im.onload = function() 
                {
                    ctx.drawImage(im, 0, 0, 400, 400);
                }; 
            }
        }
    }
    
    //test call
    test()
    {
        alert("TEST");
    };
    
}

                               
                               
                              
