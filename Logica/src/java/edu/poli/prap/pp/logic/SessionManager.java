/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.poli.prap.pp.logic;

import edu.poli.prap.pp.logic.data.Session;
import edu.poli.prap.pp.logic.data.Token;
import edu.poli.prap.pp.util.Hash;
import java.util.HashMap;

/**
 *
 */
public class SessionManager {

    private static SessionManager INSTANCE = null;

    private HashMap<String, Token> sessions = null;

    private SessionManager() {
        this.sessions = new HashMap<>();
    }

    public String addSession(Token token) {
        String key = Hash.sha1(token.getUserid() + token.getUsername());
        this.sessions.put(key, token);
        return key;
    }

    public boolean checkToken(String token) {
        return this.sessions.containsKey(token);
    }

    public Token getToken(String token) {
        return this.sessions.get(token);
    }

    public void removeToken(String token) {
        this.sessions.remove(token);
    }

    public static SessionManager getInstance() {
        if (INSTANCE == null) {
            INSTANCE = new SessionManager();
        }
        return INSTANCE;
    }
}
