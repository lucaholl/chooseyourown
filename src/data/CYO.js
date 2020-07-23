const CYO = {
    makeChoice: function(node, choice){
        let nextNode = this.nodes[node.options[choice].nextID];
        if(nextNode.event != null){
            nextNode.event(this);
        }
        return nextNode;
    },
    player :{
        inventory: [],
    },
    nodes: {
        START: {
            ID: 'start',
            text: 'Start Here',
            event: null,
            options: [
                {
                    nextID: '2',
                    text: 'go to 2'
                },
            ]
        },
        '2': {
            ID: '2',
            text: '2',
            event: null,
            options: [
                {
                    nextID: '3A',
                    text: 'go to 3a'
                },
                {
                    nextID: '3B',
                    text: 'go to 3b'
                }
            ]
        },
        '3A': {
            ID: '3A',
            text: '3A',
            event: null,
            options: [
                {
                    nextID: '4A',
                    text: 'go to 4a'
                },
                {
                    nextID: '4B',
                    text: 'go to 4b'
                },
                {
                    nextID: '4C',
                    text: 'go to 4c'
                }
            ]
        },
        '3B': {
            ID: '3B',
            text: '3B',
            event: null,
            options: [
                {
                    nextID: '4C',
                    text: 'go to 4C'
                },
                {
                    nextID: '4D',
                    text: 'go to 4d'
                },
            ]
        },
        '4A': {
            ID: '4A',
            text: '4A',
            event: null,
            options: [
                {
                    nextID: '5A',
                    text: 'go to 5a'
                },
            ]
        },
        '4B': {
            ID: '4B',
            text: '4B',
            event: null,
            options: [
                {
                    nextID: '5B',
                    text: 'go to 5B'
                },
            ]
        },
        '4C': {
            ID: '4C',
            text: '4C',
            event: null,
            options: [
                {
                    nextID: '5B',
                    text: 'go to 5B'
                },
                {
                    nextID: '5C',
                    text: 'go to 5C'
                }
            ]
        },
        '4D': {
            ID: '4D',
            text: '4D',
            event: null,
            options: [
                {
                    nextID: '5C',
                    text: 'go to 5C'
                },
                {
                    nextID: '5D',
                    text: 'go to 5D'
                }
            ]
        },
        '5A': {
            ID: '5A',
            text: '5A',
            event: null,
            options: [
                {
                    nextID: 'START',
                    text: 'back to start'
                },
            ]
        },
        '5B': {
            ID: '5B',
            text: '5B',
            event: null,
            options: [
                {
                    nextID: '6A',
                    text: 'go to 6A'
                },
                {
                    nextID: '6B',
                    text: 'go to 6B'
                }
            ]
        },
        '5C': {
            ID: '5C',
            text: '5C',
            event: null,
            options: [
                {
                    nextID: '6C',
                    text: 'go to 6C'
                },
                {
                    nextID: '6D',
                    text: 'go to 6D'
                }
            ]
        },
        '5D': {
            ID: '5D',
            text: '5D',
            event: null,
            options: [
                {
                    nextID: '6E',
                    text: 'go to 6E'
                },
                {
                    nextID: '6F',
                    text: 'go to 6F'
                }
            ]
        },
        '6A': {
            ID: '6A',
            text: '6A',
            event: null,
            options: [
                {
                    nextID: '3A',
                    text: 'go to 3a'
                },
                {
                    nextID: '3B',
                    text: 'go to 3b'
                }
            ]
        },
        '6B': {
            ID: '6B',
            text: '6B',
            event: null,
            options: [
                {
                    nextID: '3A',
                    text: 'go to 3a'
                },
                {
                    nextID: '3B',
                    text: 'go to 3b'
                }
            ]
        },
        '6C': {
            ID: '6C',
            text: '6C',
            event: null,
            options: [
                {
                    nextID: '3A',
                    text: 'go to 3a'
                },
                {
                    nextID: '3B',
                    text: 'go to 3b'
                }
            ]
        },
        '6D': {
            ID: '6D',
            text: '6D',
            event: null,
            options: [
                {
                    nextID: '3A',
                    text: 'go to 3a'
                },
                {
                    nextID: '3B',
                    text: 'go to 3b'
                }
            ]
        },
        '6E': {
            ID: '6E',
            text: '6E',
            event: null,
            options: [
                {
                    nextID: '3A',
                    text: 'go to 3a'
                },
                {
                    nextID: '3B',
                    text: 'go to 3b'
                }
            ]
        },
        '6F': {
            ID: '6F',
            text: '6F',
            event: null,
            options: [
                {
                    nextID: '3A',
                    text: 'go to 3a'
                },
                {
                    nextID: '3B',
                    text: 'go to 3b'
                }
            ]
        },
    }
};

export default CYO;