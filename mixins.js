
const mixinsAddListener = {

    _addListeners: function () {
        let events = this.props.events;
        if (!events || typeof events !== 'object')
            throw 'IllegalPropException: prop "events" must be an Object.';

        const eventNames = Object.keys(events);

        for (let name of eventNames) {
            /**
            * bind() method will validate its arguments 
            * so we don't do the duplicate work.
            */
            this.events.bind(name, events[name]);
        }
    }
};

export default mixinsAddListener;
