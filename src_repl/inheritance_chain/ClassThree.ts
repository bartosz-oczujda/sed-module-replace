import { ClassTwo } from "../../src/inheritance_chain/ClassTwo"

class ClassThree extends ClassTwo {

    protected name = "Three";
    protected prefix = "ReplacedClass";

    inheritedFunction(): string {

        return "This funcion is inherited";

    }
}

export { ClassThree }