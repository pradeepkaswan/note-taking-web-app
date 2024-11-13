CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT,
  email_verified INTEGER NOT NULL DEFAULT 0,
  totp_key BYTEA,
  recovery_code BYTEA NOT NULL
);

CREATE INDEX email_index ON users(email);

CREATE TABLE sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  expires_at BIGINT NOT NULL,
  two_factor_verified INTEGER NOT NULL DEFAULT 0
)

CREATE TABLE email_verification_requests (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  email TEXT NOT NULL,
  code TEXT NOT NULL,
  expires_at BIGINT NOT NULL
);

CREATE TABLE password_reset_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  email TEXT NOT NULL,
  code TEXT NOT NULL,
  expires_at BIGINT NOT NULL,
  email_verified INTEGER NOT NULL DEFAULT 0,
  two_factor_verified INTEGER NOT NULL DEFAULT 0
);


client.sql`
  CREATE TABLE notes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    is_archived BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`;

client.sql`
  CREATE TABLE tags (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE (user_id,name)
  )
`;

// Junction table for notes and tags (many-to-many relationship)
client.sql`
  CREATE TABLE note_tags (
    note_id UUID NOT NULL,
    tag_id UUID NOT NULL,
    PRIMARY KEY (note_id, tag_id),
    FOREIGN KEY (note_id) REFERENCES notes(id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
  )
`;

// Create indexes for better performance
client.sql`
  CREATE INDEX idx_notes_user_id ON notes(user_id);
  CREATE INDEX idx_notes_title ON notes(title);
  CREATE INDEX idx_notes_created_at ON notes(created_at);
  CREATE INDEX idx_tags_user_id ON tags(user_id);
  CREATE INDEX idx_note_tags_user_id ON note_tags(note_id);
  CREATE INDEX idx_note_tags_tag_id ON note_tags(tag_id);
  `;
