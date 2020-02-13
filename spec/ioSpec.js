describe('#IO', () => {
    let io;
    let dom;

    beforeEach(() => {
        dom = td.replace('../src/dom', {
            globals: {
                prompt: sinon.stub(),
                alert: sinon.spy()
            }
        });
        io = require('../src/io');
    });

    afterEach(() => {
        td.reset();
    });

    describe('.prompt', () => {
        it('displays a message to the users', () =>{
            const message = "What is the input string?";
            io.prompt(message);
            expect(dom.globals.prompt).to.be.calledWith(message);
        });
        it('returns the string length and string', () =>{
            const message = "Homer is 5 characters long.";
            dom.globals.prompt.withArgs('Homer').returns(message);
            expect(io.prompt('Homer')).to.equal(message);
        });
    });
    
    describe('.alert', () => {
        it('displays the messge to the user', () => {
            const message = "Homer is 5 character long.";
            io.alert(message);
            expect(dom.globals.alert).to.be.calledWith(message);
        })
    })
});