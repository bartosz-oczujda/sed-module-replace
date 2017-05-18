import { ClassTwo } from "./ClassTwo"

class ClassThree extends ClassTwo {

    protected name = "Three";
    protected prefix = "ReplacedClass";

    inheritedFunction(): string {

        return "This funcion is inherited";

    }
}

export { ClassThree }