import type { HttpContext } from "@adonisjs/core/http";
import { HttpContext } from "@adonisjs/core/http";
import User from "#models/user";

export default class UsersController {
  /**
   * Display a list of resource
   */

  async index(ctx: HttpContext) {
    const users = await User.query().select('id', 'username', 'email');
    return users;
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
  }
}
