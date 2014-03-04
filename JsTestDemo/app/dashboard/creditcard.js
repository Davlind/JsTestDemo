var app = {
    creditCard: {
        isValid: function(s) {

            var i, n, c, r, t;

            var reg = new RegExp('^\\d+$');
            if (!reg.test(s)) {
                throw Error("Credit card number must be a numeric value");
            }

            r = "";
            for (i = 0; i < s.length; i++) {
                c = parseInt(s.charAt(i), 10);
                if (c >= 0 && c <= 9)
                    r = c + r;
            }

            if (r.length !== 16)
                throw Error("Credit card number is not of correct length");

            t = "";
            for (i = 0; i < r.length; i++) {
                c = parseInt(r.charAt(i), 10);
                if (i % 2 != 0)
                    c *= 2;
                t = t + c;
            }

            n = 0;
            for (i = 0; i < t.length; i++) {
                c = parseInt(t.charAt(i), 10);
                n = n + c;
            }

            if (n != 0 && n % 10 == 0)
                return true;
            else
                return false;
        }
    }
}