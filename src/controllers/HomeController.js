

class HomeController {
    async index(req,res){
        res.json(
            "HELLO"
        );
    }
}

export default new HomeController();