$('.default-value').each(function() {
    var default_value = this.value;
    $(this).css('color', '#A9A9A9'); // this could be in the style sheet instead
    $(this).focus(function() {
        if(this.value == default_value) {
            this.value = '';
            $(this).css('color', '#222');
        }
    });
    $(this).blur(function() {
        if(this.value == '') {
            $(this).css('color', '#A9A9A9');
            this.value = default_value;
        }
    });
});
