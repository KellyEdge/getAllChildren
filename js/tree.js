/**
 * Created by kellyedge on 6/14/17.
 */

function getTree2(){

    return {
        "nodeName": "parent1",
        "children":[
            {
                "nodeName": "child1",
                "children":[

                ]
            },
            {
                "nodeName": "child2",
                "children":[

                ]
            }
        ]
    };
}

function getTree(){

    return {
        "nodeName": "node1",
        "children":[
            {
            "nodeName": "node2",
            "children":[
                {
                "nodeName": "node5",
                "children":[]},
                {
                "nodeName": "node6",
                "children":[]},
                {
                "nodeName": "node7",
                "children":[]
                }]
            },
            {
            "nodeName": "node3",
            "children":[]
            },
            {
            "nodeName": "node4",
            "children":[
                {
                    "nodeName": "node8",
                    "children":[]},
                {
                    "nodeName": "node9",
                    "children":[]},
                {
                    "nodeName": "node10",
                    "children":[
                        {
                            "nodeName": "node11",
                            "children":[]},
                        {
                            "nodeName": "node12",
                            "children":[]},
                        {
                            "nodeName": "node13",
                            "children":[
                                {
                                "nodeName": "node14",
                                "children":[]
                            }]
                        }]
                }]
            }
        ]
    };
}
