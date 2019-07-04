create table if not exists macaddrs (
        id integer not null primary key autoincrement,
        macaddr text       not null unique,
        description text    not null,
        created TIMESTAMP DEFAULT (datetime(CURRENT_TIMESTAMP,'localtime')),
        updated datetime default null
);



select * from macaddrs;

update macaddrs set macaddr="uhai" where id=1;
insert into macaddrs (macaddr, description) values ("hoge", "fuga");




