
$(document).ready(function() {

    function write(msg){
        $("body").append("<br>" + msg);
        console.log(msg);
    }

    $("#btnGetDescendents").click(function(){

        // get the top node
        var topNode = getTree();

        var nodeList = [];

        // call getAllDescendents - this will return an arrray with all descendents
        getAllDescendents(topNode, nodeList);

        // should now have a single array with all nodes, length of 14
        write("Descendents found: " + nodeList.length)


    }).css("background-color", "blue").css("color", "white");

    function getAllDescendents(node, nodeList){

        // add the node to the nodeList array
        nodeList.push(node);


        // loop through children and recurse this function
        for (var index = 0; index < node.children.length; ++index) {

            var child = node.children[index];

            // recurse
            getAllDescendents(child, nodeList);

        }

        /*
         // loop through children and recurse this function
         $.each(node.children, function( index, child) {
         //recurse
         getAllDescendents(child, nodeList);
         });
        */



    }

}); // document.ready

