class ClassOne {

    protected prefix = "Class";
    protected name = "One";

    public getFullName(): string {
        return `${this.prefix + this.name}`
    }

}

export { ClassOne }