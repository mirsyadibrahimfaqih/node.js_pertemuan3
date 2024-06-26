class StudentController {
    index(req, res) {
        const data = {
            message: "Menampilkan semua students",
            data:[],
        };
        res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;

        const data = {
            message: "Menambahkan data student",
            data: [],
        };

        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const data = {
            message: `Mengedit student ${id}`,
            data: [],
        };

        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;
        
        const data = {
            message: `Menghapus student ${id}`,
            data: [],
        };

        res.json(data);
    }
}

const object = new StudentController();

module.exports = object;
