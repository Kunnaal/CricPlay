const { Router } = require ("express"); //Express router
const router = Router();

//Route imports:
const { CreateLobby, JoinLobby } = require ('../Controller/AuthController');

//Initial routes:
router.post('/create', CreateLobby);
router.post('/join', JoinLobby);

module.exports = router;