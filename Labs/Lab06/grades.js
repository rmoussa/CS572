function gradesManipulation() {

    this.arr = [{
        id: 1,
        name: "Asaad Saad",
        course: "CS572",
        grade: "95"
    }];

    this.getById = (id) => {
        return this.arr.filter((x) => x.id == id);
    }

    this.create = (id, name, course, grade) => {
        this.arr.push({
            id: id,
            name: name,
            course: course,
            grade: grade
        });
    }

    this.update = (id, name, course, grade) => {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id == id) {
                this.arr[i].name = name;
                this.arr[i].course = course;
                this.arr[i].grade = grade;
            }
        }
    }

    this.delete = (id) => {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].id == id) {
                this.arr.splice(i, 1);
            }
        }
    }
}

module.exports = new gradesManipulation();