# Output-decorator
used to pass/emit custom event from child to parent  P -----> C  @Input decorator we pass data from P to C C -----> P  @Output decorator we pass custom event from C to P  event is raised in child but method of parent is called data is passed from child to parent   child action--->event object created &amp; emit(data)--->parent method invoke
