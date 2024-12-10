const str = `456;`;

function my_parse(str) {
    const tokenized = tokenize(str);
    display("tokens: ");
    display_list(tokenized);
    display("----");
    if (length(tokenized) === 0) {
        return null;
    } else if (length(tokenized) === 2) {
        const lit = head(tokenized);
        return list("literal", lit);
    } else {
        return error("fucking syntax error");
    }
    
    
    return length(tokenized) === 0
        ? null
        : length(tokenized) === 2
        ? list("literal", head(tokenized))
        : error("fucking syntax error");
}

display("target:");
display_list(parse(str));
display("=====");
display_list(my_parse(str));
parse_int(`543asdf`, 10);
// display_list(tokenize(`    `));