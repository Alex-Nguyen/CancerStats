/**
 * Created by vinhtngu on 7/13/17.
 */
var globalData;
function  LoadData() {
    d3.csv("Data/Data.csv", function(data) {
        var distinctvalue = d3.nest().key(function (d) {
            return d.Cancer;
        }).entries(data);
        var geneA = d3.nest().key(function (d) {
            return d.geneA;
        }).entries(data);
        var geneB = d3.nest().key(function (d) {
            return d.geneB;
        }).entries(data);
        document.write("Total records: "+data.length+ "<p>");
        document.write("Number of cancers"+ "</br>");
        distinctvalue.forEach(function (d,i) {
            document.write(++i+":"+"&nbsp;"+d.key +": "+ d.values.length+ "<br/>")


        });
        document.write("<p>");
        document.write("Number of distinctive gene A: "+ geneA.length+"</br>");
        document.write("Number of distinctive gene B: "+ geneB.length);


        var Pairwise = new Object();
        data.forEach(function (d) {
           var geneA = d.geneA, geneB = d.geneB;
           if(!Pairwise.hasOwnProperty(geneA+"-"+geneB)&&!Pairwise.hasOwnProperty(geneB+"-"+geneA)){
               Pairwise[geneA+"-"+geneB]=[];
               Pairwise[geneA+"-"+geneB].push({"name":d.Cancer,"value":d['p-Value']});
           }
           else{
               Pairwise[geneA+"-"+geneB].push({"name":d.Cancer,"value":d['p-Value']});
           }
        })
        console.log(Pairwise)
        
    });
}