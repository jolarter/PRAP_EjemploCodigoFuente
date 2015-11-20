/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.poli.prap.pp.util;

import edu.poli.prap.pp.logic.SessionManager;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author h4x0r
 */
public class Hash {

    public static String sha1(String input) {
        try {
            MessageDigest mDigest = MessageDigest.getInstance("SHA-1");
            byte[] result = mDigest.digest(input.getBytes());
            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < result.length; i++) {
                sb.append(Integer.toString((result[i] & 0xff) + 0x100, 16).substring(1));
            }

            return sb.toString();
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(SessionManager.class.getName()).log(Level.SEVERE, null, ex);
        }

        return null;
    }

    public static boolean isValidSHA1(String s) {
        return s.matches("[a-fA-F0-9]{40}");
    }

}
