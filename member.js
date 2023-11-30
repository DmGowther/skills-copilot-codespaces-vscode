function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St'
    };

    var skills = {
        languages: ['JavaScript', 'Python', 'C++'],
        isDesigner: false,
        isDeveloper: true
    };

    // add skills to member
    member.skills = skills;

    // add a method to member
    member.greet = function() {
        console.log('Hello, my name is ' + this.name);
    };

    // call the greet method
    member.greet();
}