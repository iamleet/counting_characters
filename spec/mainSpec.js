describe('#MAIN', () => {

    let io;
    let main;

    beforeEach(() => {
        io = td.replace('../src/io', {
            prompt: sinon.stub(),
            main: sinon.stub()
        });
    
        io.prompt.returns('');

        main = require('../src/index');

    });

    afterEach(() => {
        td.reset();
    });


    describe('.main', () => {

        it('Prompts the user for a string', () => {
            io.prompt.withArgs('What is the input string?').returns('Homer has 5 characters.');
            main.main();
            expect(io.prompt).to.be.calledWith('What is the input string?');
        });
        it('Returns the length of a string', () => {
            const message = "Homer has 5 characters.";
            io.prompt.withArgs('What is the input string?').returns('Homer')
            io.main.returns(message);
            const count =  main.main();
            expect(count).to.equal(message);
        });
    });
});