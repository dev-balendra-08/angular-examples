describe('AngularJS session', function () {
  it('should be true', function () {
    expect(true).toBe(true)
  })
  it('should compile directives', inject(function($rootScope, $compile) {

    $rootScope.name = "Thanos"
    var expression = "<div> Hello {{name}}</div>"

    var element = $compile(expression)($rootScope)
    expect(element.html()).not.toContain('Hello Thanos')

    $rootScope.$digest()
    expect(element.html()).toContain('Hello Thanos')
  }))
})
