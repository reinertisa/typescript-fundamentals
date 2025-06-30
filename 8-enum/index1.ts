enum Role {
    ROLE_USER,
    ROLE_ADMIN,
    ROLE_SYSTEM
}

let u1: {name: string, role: Role};

u1 = {name: 'Junior', role: Role.ROLE_ADMIN};


enum Role2 {
    ROLE_USER = 5,
    ROLE_ADMIN,
    ROLE_SYSTEM
}

let u2: {name: string, role: Role2};
u2 = {name: 'Isa', role: Role2.ROLE_ADMIN};


enum Role3 {
    ROLE_USER = 'user',
    ROLE_ADMIN = 'admin',
    ROLE_SYSTEM = 'system'
}

let u3: {name: string, role: Role3};
u3 = {name: 'Kristi', role: Role3.ROLE_ADMIN};


enum Role4 {
    ROLE_USER = 'user',
    ROLE_ADMIN = 5,
    ROLE_SYSTEM = 'system'
}

let u4: {name: string, role: Role4};
u4 = {name: 'Tanya', role: Role4.ROLE_ADMIN}