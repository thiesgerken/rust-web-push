(function() {var implementors = {};
implementors["hyper"] = ["impl <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for <a class='struct' href='tokio_core/net/tcp/struct.TcpStream.html' title='tokio_core::net::tcp::TcpStream'>TcpStream</a>","impl&lt;'a&gt; <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for &amp;'a <a class='struct' href='tokio_core/net/tcp/struct.TcpStream.html' title='tokio_core::net::tcp::TcpStream'>TcpStream</a>","impl&lt;E&gt; <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for <a class='struct' href='tokio_core/reactor/poll_evented/struct.PollEvented.html' title='tokio_core::reactor::poll_evented::PollEvented'>PollEvented</a>&lt;E&gt; <span class='where fmt-newline'>where E: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl&lt;'a, E&gt; <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for &amp;'a <a class='struct' href='tokio_core/reactor/poll_evented/struct.PollEvented.html' title='tokio_core::reactor::poll_evented::PollEvented'>PollEvented</a>&lt;E&gt; <span class='where fmt-newline'>where &amp;'a E: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>",];
implementors["hyper_tls"] = ["impl <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for <a class='enum' href='hyper_tls/enum.MaybeHttpsStream.html' title='hyper_tls::MaybeHttpsStream'>MaybeHttpsStream</a>",];
implementors["tokio_core"] = ["impl <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for <a class='struct' href='tokio_core/net/struct.TcpStream.html' title='tokio_core::net::TcpStream'>TcpStream</a>","impl&lt;'a&gt; <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for &amp;'a <a class='struct' href='tokio_core/net/struct.TcpStream.html' title='tokio_core::net::TcpStream'>TcpStream</a>","impl&lt;E:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for <a class='struct' href='tokio_core/reactor/struct.PollEvented.html' title='tokio_core::reactor::PollEvented'>PollEvented</a>&lt;E&gt;","impl&lt;'a, E&gt; <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for &amp;'a <a class='struct' href='tokio_core/reactor/struct.PollEvented.html' title='tokio_core::reactor::PollEvented'>PollEvented</a>&lt;E&gt; <span class='where fmt-newline'>where &amp;'a E: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>",];
implementors["tokio_io"] = [];
implementors["tokio_tls"] = ["impl&lt;S:&nbsp;<a class='trait' href='tokio_io/trait.AsyncRead.html' title='tokio_io::AsyncRead'>AsyncRead</a> + <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a>&gt; <a class='trait' href='tokio_io/trait.AsyncWrite.html' title='tokio_io::AsyncWrite'>AsyncWrite</a> for <a class='struct' href='tokio_tls/struct.TlsStream.html' title='tokio_tls::TlsStream'>TlsStream</a>&lt;S&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
