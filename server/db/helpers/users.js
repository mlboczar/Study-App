const client = require("../client");

//* Potentially change "users" to just "user" for better clarification *
const createUser = async ({
  email,
  password,
  dob,
  first_name,
  last_name,
  location,
  about_me,
  education_level,
  work,
  education,
  classes,
  skills,
  availibility,
  interests,
  photo,
  languages,
  study_habits,
  major,
  gender,
}) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        INSERT INTO users(email, password, dob, first_name, last_name, location, about_me, education_level, work, education, classes, skills, availibility, interests, photo, languages, study_habits, major, gender)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        RETURNING *;
      `,
      [
        email,
        password,
        dob,
        first_name,
        last_name,
        location,
        about_me,
        education_level,
        work,
        education,
        classes,
        skills,
        availibility,
        interests,
        photo,
        languages,
        study_habits,
        major,
        gender,
      ]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

//Get all Users
const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
            SELECT *
            FROM users;
        `);
    return rows;
  } catch (error) {
    throw error;
  }
};

//Get all users, with optional filtering
const getUsersMatchingFilters = async (filters) => {
  try {
    let sql_command = `
        SELECT *
        FROM users
        WHERE 1 = 1
    `;
    let params = [];
    function sql_param(value) {
      params.push(value);
      return `$${params.length}`;
    }

    // for text substring match
    // uses LIKE expression, ie. `email LIKE '%@gmail.com%'`
    // to support lower case, we do eg. `lower(email) LIKE '%gmail.com%`
    if (filters.email) {
      sql_command += ` AND lower(email) LIKE ${sql_param(
        `%${filters.email.toLowerCase()}%`
      )}`;
    }

    if (filters.first_name) {
      sql_command += ` AND lower(first_name) LIKE ${sql_param(
        `%${filters.first_name.toLowerCase()}%`
      )}`;
    }

    if (filters.last_name) {
      sql_command += ` AND lower(last_name) LIKE ${sql_param(
        `%${filters.last_name.toLowerCase()}%`
      )}`;
    }

    if (filters.about_me) {
      sql_command += ` AND lower(about_me) LIKE ${sql_param(
        `%${filters.about_me.toLowerCase()}%`
      )}`;
    }

    // for exact string match, but support multiple acceptable options
    // we use IN expression, ie. `education_level IN ('phD', 'highschool')
    // note you can search for exactly one match by having a list of one,
    // ie. `education_level IN ('phD')` filters for exactly phD only.
    if (filters.education_level) {
      sql_command += ` AND education_level IN (${filters.education_level
        .map(sql_param)
        .join(", ")})`;
    }

    if (filters.gender) {
      sql_command += ` AND gender IN (${filters.gender
        .map(sql_param)
        .join(", ")})`;
    }

    if (filters.major) {
      sql_command += ` AND major IN (${filters.major
        .map(sql_param)
        .join(", ")})`;
    }

    // for array-of-string columns, we want to check if there's any
    // overlap between the filter's selected options and that row's
    // columns' values. To check overlap, we use the array-&& operator
    // ie. `interests && ARRAY['reading', 'gardening']`
    if (filters.interests) {
      sql_command += ` AND interests && ARRAY[${filters.interests
        .map(sql_param)
        .join(", ")}]`;
    }

    console.log("filtering");
    console.log(sql_command);
    console.log({ filters, params });
    const { rows } = await client.query(sql_command, params);
    return rows;
  } catch (error) {
    throw error;
  }
};

//Get user by ID
const getUserById = async (user_id) => {
  try {
    const {
      rows: [users],
    } = await client.query(
      `
              SELECT *
              FROM users
              WHERE user_id = $1
      `,
      [user_id]
    );
    return users;
  } catch (error) {
    throw error;
  }
};

// PUT - /api/users/:user_id - update a user
const updateUser = async (user_id, updatedUserData) => {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
        UPDATE users
        SET
        email = $1,
        password = $2,
        dob = $3,
        first_name = $4,
        last_name = $5,
        location = $6,
        about_me = $7,
        education_level = $8,
        work = $9,
        education = $10,
        classes = $11,
        skills = $12,
        availibility = $13,
        interests = $14,
        photo = $15,
        languages = $16,
        study_habits = $17,
        major = $18,
        gender = $19
        WHERE user_id = $20
        RETURNING *;
        `,
      [
        updatedUserData.email,
        updatedUserData.password,
        updatedUserData.dob,
        updatedUserData.first_name,
        updatedUserData.last_name,
        updatedUserData.location,
        updatedUserData.about_me,
        updatedUserData.education_level,
        updatedUserData.work,
        updatedUserData.education,
        updatedUserData.classes,
        updatedUserData.skills,
        updatedUserData.availibility,
        updatedUserData.interests,
        updatedUserData.photo,
        updatedUserData.languages,
        updatedUserData.study_habits,
        updatedUserData.major,
        updatedUserData.gender,
        user_id,
      ]
    );
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (user_id) => {
  try {
    client.query(
      `
      DELETE FROM messages
      WHERE sender = $1
      `,
      [user_id]
    );
    client.query(
      `
      DELETE FROM messages
      WHERE receiver = $1
      `,
      [user_id]
    );
    client.query(
      `
        DELETE FROM rsvps
        WHERE user_id = $1
        `,
      [user_id]
    );
    const result = await client.query(
      `
            DELETE FROM users
            WHERE user_id = $1
          `,
      [user_id]
    );
  } catch (error) {
    throw error;
  }
};

const getUserMessages = async (user_id) => {
  try {
    const result = await client.query(
      `
          SELECT
              m.message_id,
              m.message_content,
              s.user_id AS sender,
              s.first_name AS sender_first_name,
              s.photo AS sender_photo,
              r.user_id AS receiver,
              r.first_name AS receiver_first_name,
              r.photo AS receiver_photo,
              m.thread_id
          FROM
              messages m
          INNER JOIN
              users s ON m.sender = s.user_id
          INNER JOIN
              users r ON m.receiver = r.user_id
          WHERE
              s.user_id = $1;
      `,
      [user_id]
    );

    const messages = result.rows;

    return messages;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUsersMatchingFilters,
  getUserById,
  deleteUser,
  updateUser,
  getUserMessages,
};
