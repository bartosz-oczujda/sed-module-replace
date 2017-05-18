import { Tester } from "./Tester";

class TesterSubclass extends Tester {
    
    getNum(): number {
        return 33
    }
}

export { TesterSubclass }