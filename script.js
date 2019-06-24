var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    getDefaultProps: function() {
       //console.log(getDefaultProps);
    },

    componentWillMount: function() {
       //console.log(componentWillMount);
    },

    componentDidMount: function() {
       //console.log(componentDidMount);
    }, 

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
            console.log();
    },

	decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },


    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {onClick: this.increment}, ' plus ' + this.state.counter),

             React.createElement('span', {onClick: this.decrement}, ' minus '),


            React.createElement('span', {onClick: this.increment}, ' plus ' + this.state.counter),

             React.createElement('span', {onClick: this.decrement}, ' minus ')

        );
       
    }
});

var deCounter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    getDefaultProps: function() {
       //console.log(getDefaultProps);
    },

    componentWillMount: function() {
       //console.log(componentWillMount);
    },

    componentDidMount: function() {
       //console.log(componentDidMount);
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
            console.log();
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },


    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {onClick: this.increment}, ' plus ' + this.state.counter),

             React.createElement('span', {onClick: this.decrement}, ' minus '),


            React.createElement('span', {onClick: this.increment}, ' plus ' + this.state.counter),

             React.createElement('span', {onClick: this.decrement}, ' minus ')

        );
       
    }
});



//var element = React.createElement(Counter);
//ReactDOM.render(element, document.getElementById('app'));


var List = React.createClass({

  render: function() {
    return (
        React.createElement(Counter),
        React.createElement(deCounter)
    )
  },
});


ReactDOM.render(React.createElement(List), document.getElementById('app'));